import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const BookCard = (props) => {
  return (
    <div
      className={`${props.shadow === "2xl" && "shadow-2xl"} 
      ${props.shadow === "xl" && "shadow-xl"}
      ${props.shadow === "lg" && "shadow-lg"}
      ${props.shadow === "md" && "shadow-md"}
      `}
    >
      <Card style={{ maxWidth: props.maxWidth | 250 }}>
        <CardActionArea>
          {props?.imgSrc && (
            <CardMedia
              style={{ height: props.imgHeight | 300 }}
              image={props.imgSrc}
              title="bookCardImage"
            />
          )}
          <CardContent>
            {props?.title && (
              <Typography gutterBottom variant="h5">
                <p className="font-medievalFont font-bold">{props.title}</p>
              </Typography>
            )}
            {props?.description && (
              <Typography variant="body2" color="textSecondary">
                <div className=" font-contentFont font-bold">
                  {props.description}
                </div>
              </Typography>
            )}
          </CardContent>
        </CardActionArea>

        <CardActions>
          {props?.label1 && (
            <Typography
              variant="button"
              display="block"
              gutterBottom
              className="ml-4 text-lg font-black font-boldTallFont"
            >
              {props.label1}
            </Typography>
          )}
          {props?.label2 && (
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="rounded-full bg-ferrariRed text-white px-2"
            >
              {props.label2}
            </Typography>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default BookCard;
