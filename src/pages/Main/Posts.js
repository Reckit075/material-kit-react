/* eslint-disable import/order */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "./components/MKBox";
import MKTypography from "./components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "./components/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "./components/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/examples/testimonial-6-2.jpg";
import post2 from "assets/examples/testimonial-6-3.jpg";
import post3 from "assets/examples/blog-9-4.jpg";
import post4 from "assets/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Nyheter
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Meddela besökare"
              description="Berätta för dina kunder om nyheter och evenemang på din webbsida så ofta som möjligt. Du behöver hålla din sida uppdaterad så att  ..."
              action={{
                type: "internal",
                route: "/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Webbsidan har lanserats"
              description="Vår nya webbsida lanserades idag. Berätta för dina besökare varför du har börjat med en ny presentation och hur de kan dra nytta av den. Nämn dina..."
              action={{
                type: "internal",
                route: "/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Meddela besökare"
              description="Berätta för dina kunder om nyheter och evenemang på din webbsida så ofta som möjligt. Du behöver hålla din sida uppdaterad så att  ..."
              action={{
                type: "internal",
                route: "/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Takläggning med papp"
              description="Takläggning med papp, tegel och plåt (med AMA system) samt reparationer"
              action={{
                type: "internal",
                route: "/",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
