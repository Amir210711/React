import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }

    
        function RenderComments({comments}) {
        if (dish != null && dish.comments != null) {
            
            return dish.comments.map(review => (
                <div key={review.id}>
                    <div><h4>Comments</h4></div>    
                    <div>
                        <p>{review.comment}</p>
                    </div>
                    <div>
                    <p>-- {review.author}, &nbsp; {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(review.date))}
                    </p>
                   </div>
                        
                </div>
                ));
            
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const  DishDetail = (props) => {
        if (props.dish != null)
		return ( 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
		);
    }

    export default DishDetail;