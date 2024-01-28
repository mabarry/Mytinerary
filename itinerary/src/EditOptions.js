import "./EditOptions.css";
import Option from "./components/Option";

function EditOptions() {
/*
    {
      id: 'lfwzj3hKknLkWk4StJEfQA',
      alias: 'la-panadería-san-antonio-7',
      name: 'La Panadería',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/2di0R6hsWobQPGs3UJZiEA/o.jpg',
      is_closed: false,
      url: 'https://www.yelp.com/biz/la-panader%C3%ADa-san-antonio-7?adjust_creative=t2Xswg8ijlbmPOQYGvfnBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=t2Xswg8ijlbmPOQYGvfnBg',
      review_count: 2287,
      categories: [Array],
      rating: 4.5,
      coordinates: [Object],
      transactions: [Array],
      price: '$$',
      location: [Object],
      phone: '+12105926264',
      display_phone: '(210) 592-6264',
      distance: 7915.80750923748
    }
*/

    return(
    <div className="main">
        <div className="edits">
            <div className="info"></div>
            <div className="selection">
                <h1>Edit Your Selections</h1>
                <p>Breakfast</p>
                <div className="options-border">
                    <div className="options">
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                        <Option />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default EditOptions;