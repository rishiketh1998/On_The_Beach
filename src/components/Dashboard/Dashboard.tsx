import { Hotel } from "../../types/interfaces/hotel";
import { Stack } from "@mui/material";
import { Card } from "../Card/Card";

export interface DashboardProps {
  hotelsInformation: Hotel[];
}

export const Dashboard = ({ hotelsInformation }: DashboardProps) => {
  return (
    <Stack spacing={3}>
      {hotelsInformation.map((hotel: Hotel) => (
        <Card key={hotel.id} hotel={hotel} />
      ))}
    </Stack>
  );
};
