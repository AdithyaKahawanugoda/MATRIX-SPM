import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const BookCard = (props) => {
  return (
    <>
      <Card style={{ maxWidth: props.maxWidth | 250 }}>
        <CardActionArea>
          {props?.imgSrc && (
            <CardMedia
              style={{ height: props.height | 500 }}
              image={props.imgSrc}
              title="bookCardImage"
            />
          )}
          <CardContent>
            {props?.title && (
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
            )}
            {props?.description && (
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
        <CardActions>
          {props?.label1 && (
            <Typography variant="button" display="block" gutterBottom>
              {props.label1}
            </Typography>
          )}
          {props?.label2 && (
            <Typography variant="overline" display="block" gutterBottom>
              {props.label2}
            </Typography>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default BookCard;
