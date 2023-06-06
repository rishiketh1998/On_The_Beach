import styled from "@emotion/styled";

export type BackgroundImageProps = {
  image: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>(
  ({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "fill",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    overflowX: "hidden",
  })
);
