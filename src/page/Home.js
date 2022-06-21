import React from "react";
import "../css/Style.css";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Spinner
} from 'reactstrap';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoading: true
    }
  }

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.jikan.moe/v4/recommendations/anime?page=2", requestOptions)
      .then(response => response.text())
      .then(result => this.setState({ items: JSON.parse(result)["data"], isLoading: false }))
      .catch(error => console.log('error', error));
  }

  render() {
    const { items, isLoading } = this.state
    if(isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center fixed-spinner">
          <Spinner color="danger" type="grow">Loading...</Spinner>
        </div>
      );
    }

    return (
    <React.Fragment>
      <Container className="p-3">
        <CardGroup>
          { items.map((item, i) =>
            <a className="col-xs-12 col-md-3 text-decoration-none" key={i} href={item.entry[0].url}>
              <Card className="m-2">
                <CardImg
                  alt={item.entry[0].title}
                  src={item.entry[0].images.webp.image_url}
                  top
                  width="100%"
                  height="250px"
                />
                <CardBody>
                  <CardTitle tag="h5" className="text-danger">
                    {item.entry[0].title}
                  </CardTitle>
                </CardBody>
              </Card>
            </a>
        ) }
        </CardGroup>
      </Container>
    </React.Fragment>
    );
  }
}

export default Home;
