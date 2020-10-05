import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

const mapStateToProps = ({
  informationReducer: { lat, long, countryCode },
}) => ({ lat, long, countryCode });

const ActivitiesView = (props) => {
  const [activitiesData, setActivitiesData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [currentActivities, setCurrentActivities] = useState([]); // DISCUSS

  const countryCode = 'US';
  const DEFAULT_IMG = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

  const createActivities = (activitiesObject, category) => {
    return activitiesObject.map((activitiesInfo, i) => {
      return (
        <Card key={`activities-card-${i}`}>
          <div className="card-img-container">
            <Card.Img className="card-img" variant="top" src={activitiesInfo.image_url} />
          </div>
          <Card.Body>
            <Card.Title>{activitiesInfo.name}</Card.Title>
            <Card.Text>
              Rating: {activitiesInfo.rating}
            </Card.Text>
            <Card.Text>
              Reviews: {activitiesInfo.review}
            </Card.Text>
            <Card.Text>
              Location: {activitiesInfo.location.address1}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  const fetchData = (category = 'bars') => {
    fetch(`/businesses/${category}?lat=${props.lat}&lon=${props.long}`, {
      method: 'GET',
      headers: {
        "Content-Type": "Application/JSON",
      },
    })
      .then((res) => (res.json()))
      .then((data) => {
        setActivitiesData(data);
        setFetchedData(true);
        setCurrentActivities(createActivities(data));
      })
      .catch((err) => console.log('Activities fetch ERROR: ', err));
  };

  const changeCategory = (category) => {
    return () => {
      fetchData(category);
      // setCurrentActivities(createActivities(activitiesData, category)); // DISCUSS
    };
  };

  useEffect(() => {
    if (!fetchedData) fetchData();
  }, []);

  useEffect( () => {
    fetchData();
  }, [props.city])

  if (!activitiesData) return null;

  if (fetchedData) {
    const CATEGORIES = ['restaurants', 'bars', 'climbing', 'health', 'bowling', 'fitness'];
    const buttonsArray = [];

    for (let i = 0; i < CATEGORIES.length; i += 1) {
      buttonsArray.push(
        <Button
          key={`b${i}`}
          className="mx-1 my-3"
          variant="dark"
          onClick={changeCategory(CATEGORIES[i])}
          id={CATEGORIES[i]}
        >
          {CATEGORIES[i]}
        </Button>,
      );
    }

    return (
      <div className="activities-container">
        <h1 id="title">Local Activities Information</h1>
        <div className="activities-buttons">
          {buttonsArray}
        </div>
        <div className="cards-container">
          <CardDeck>
            {currentActivities}
          </CardDeck>
        </div>
      </div>
    );
  } else {
    return (
      <h1 id="title">Fetching from database</h1>
    );
  }
};

export default connect(mapStateToProps, null)(ActivitiesView);
