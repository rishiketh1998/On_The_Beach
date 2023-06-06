import { useState } from "react";
import type { Hotel } from "../../types/interfaces/hotel";
import {
  Box,
  Typography,
  Card as MuiCard,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StarIcon from "@mui/icons-material/Star";

export interface CardProps {
  hotel: Hotel;
}

export const Card = ({ hotel }: CardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const getOccupancyText = (
    adults: number,
    children: number,
    infant: number
  ): JSX.Element => {
    let occupancyText = (
      <span>
        <b>{adults}</b> adults
      </span>
    );

    if (children > 0) {
      occupancyText = (
        <span>
          {occupancyText}, <b>{children}</b>{" "}
          {children > 1 ? "children" : "child"}
        </span>
      );
    }

    if (infant > 0) {
      occupancyText = (
        <span>
          {occupancyText}, <b>{infant}</b> infant
        </span>
      );
    }

    return occupancyText;
  };

  return (
    <Box>
      <MuiCard
        sx={{ display: "flex", position: "relative", borderRadius: 0 }}
        elevation={0}
      >
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image={hotel.image}
          alt={hotel.name}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor: "whitesmoke",
            fontSize: "10px",
            px: 3,
            display: "flex",
            py: 0.5,
            borderRadius: "0",
            justifyContent: "space-between",
            textTransform: "none",
            ":hover": {
              backgroundColor: "whitesmoke",
            },
          }}
          component={Button}
          onClick={() => setExpanded(!expanded)}
        >
          <Typography fontSize="14px" color="#3b4889" sx={{ pr: 3 }}>
            <b>{expanded ? "Read less" : "Read more"}</b> about this hotel
          </Typography>
          {expanded ? (
            <ExpandLessIcon sx={{ color: "#3b4889", fontWeight: "bold" }} />
          ) : (
            <ExpandMoreIcon
              sx={{
                color: "#3b4889",
                fontWeight: "bold",
              }}
            />
          )}
        </Box>
        <Box sx={{ display: "contents" }}>
          <CardContent sx={{ width: "100%" }}>
            <Typography
              gutterBottom
              color="#3b4889"
              sx={{ fontWeight: "bold" }}
            >
              {hotel.name}
            </Typography>
            <Typography
              gutterBottom
              sx={{ fontSize: "12px", fontWeight: "bold" }}
              color={"#BFBFBF"}
            >
              {hotel.location}
            </Typography>
            <Typography gutterBottom>
              {[...Array(hotel.rating)].map((e, i) => (
                <StarIcon
                  sx={{ color: "#FFB800", fontSize: "18px", mr: 0.5 }}
                  key={i}
                />
              ))}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: "12px" }} color="#757575">
              {getOccupancyText(hotel.adults, hotel.children, hotel.infant)}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: "12px" }} color="#757575">
              <b>{hotel.date}</b> for <b>{hotel.days}</b> days
            </Typography>
            <Typography gutterBottom sx={{ fontSize: "12px" }} color="#757575">
              departing from <b>{hotel.departingAirport}</b>
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{ fontSize: "12px", py: 1 }}
              color="#757575"
            >
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#FEDC07",
                  color: "#20346E",
                  display: "block",
                  ":hover": {
                    backgroundColor: "#FEDC07",
                  },
                }}
                component={Button}
              >
                <Typography
                  fontSize="12px"
                  sx={{ textTransform: "capitalize", letterSpacing: "1px" }}
                >
                  Book Now
                </Typography>
                <Typography
                  fontSize="24px"
                  sx={{
                    letterSpacing: "4px",
                  }}
                >
                  £{hotel.price.toFixed(2)}
                </Typography>
              </Box>
            </Typography>
          </CardContent>
        </Box>
      </MuiCard>
      <Box
        sx={{
          backgroundColor: "white",
          py: 0,
          my: 0,
          display: !expanded ? "none" : "block",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            fontWeight="bold"
            fontSize="14px"
            color="#3b4889"
          >
            Overview
          </Typography>
          <Typography gutterBottom fontSize="12px" color="#323232">
            {hotel.description}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
};
