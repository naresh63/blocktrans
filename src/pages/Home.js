import { Container, Grid, Typography } from "@mui/material";
import React from "react";


//images
import img1 from "../assets/img1.jpg";
import ImageSlider from "../components/ImageSlider";
import MyCustomSelect from "../components/CommonSelect";

function Home() {


  return (
    <>
      <Container maxwidth="lg">
        <Grid
          container
          spacing={5}
          style={{
            display: "flex",
            paddingTop: "30px",
          }}
        >
          <Grid
            item
            xs={12}
            container
            style={{
              display: "flex",
              textAlign: "start",
            }}
          >
            <Grid item xs={8}>
              <Typography> logo welcome </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography> logout </Typography>
            </Grid>
          </Grid>
          <Grid item>
          <ImageSlider/>
          <MyCustomSelect/>
          
   
          </Grid>
          <Grid item xs={12}>
            <Typography>
              dustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid spacing={5} item xs={12} container>
            <Grid item xs={6}>
              <Typography>
                dustry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                dustry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* <div
      className="box"
        style={{
          // border: "1px solid grey",
          // height: "400px",
          // width: "400px",
          // marginTop: "50px",
          // marginLeft: "100px",
          // backgroundColor: 'grey',
          // background: ` radial-gradient(circle at 100% 100%, #808080 0, #808080 3px, transparent 3px) 0% 0%/8px 8px no-repeat,
          //   radial-gradient(circle at 0 100%, #808080 0, #808080 3px, transparent 3px) 100% 0%/8px 8px no-repeat,
          //   radial-gradient(circle at 100% 0, #808080 0, #808080 3px, transparent 3px) 0% 100%/8px 8px no-repeat,
          //   radial-gradient(circle at 0 0, #808080 0, #808080 3px, transparent 3px) 100% 100%/8px 8px no-repeat,
          //   linear-gradient(#808080, #808080) 50% 50%/calc(100% - 10px) calc(100% - 16px) no-repeat,
          //   linear-gradient(#808080, #808080) 50% 50%/calc(100% - 16px) calc(100% - 10px) no-repeat,
          //   linear-gradient(90deg, transparent 0%, #48abe0 100%)`,
          // borderRadius: "20px",
          // padding: "9px",
          // boxSizing: "border-box",
          // // backgroundColor: 'grey',
        }}
      >
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div> */}
      </Container>
    </>
  );
}

export default Home;
