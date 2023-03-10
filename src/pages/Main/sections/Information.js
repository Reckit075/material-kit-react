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
import HeroImage from "assets/examples/hero2.png";
import MKBox from "../components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "../components/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "../components/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12} id="about-us">
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Tillbyggnad"
                    description="Ombyggnad av vind till vindslägenheter"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Badrumsrenoveringar"
                    description="Vvs- och elarbeten"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Takläggning med papp"
                    description="tegel och plåt (med AMA system) samt reparationer"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Nybyggnation"
                    description="Nybyggnation av nyckelfärdiga hus"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={HeroImage}
              title="Välkommen"
              description="Vi har arbetat med många olika projekt och har byggt upp en stark kompetens och erfarenhet inom vårt område. Vi ser fram emot att arbeta med dig och hjälpa dig att uppfylla dina behov och mål. Tveka inte att kontakta oss om du har frågor eller om du vill diskutera ditt projekt med oss."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
