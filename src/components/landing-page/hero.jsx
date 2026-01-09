import { ChevronRight } from "@mui/icons-material";
import { Box, Container, Typography, Button } from "@mui/material";
import { icons, images } from "../../assets/index";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(180deg, rgba(255,255,255,0.35) 10%, #D4DDFF 100%)",
        py: { xs: 12, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 5,
          }}
        >
          {/*-------------- left side */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: "8px 12px 8px 8px",
                backgroundColor: "primary.overlay",
                borderRadius: "30px",
                width: "fit-content",
              }}
            >
            <Box component="img" src={icons.avatars} alt="avatars icon" sx={{
                height:{xs:'auto', md:"40px"},
                mr:{xs:.5 , md:1}
                }}/>
              <Typography sx={{fontSize:{xs:'12px',md:'14px'}}}>Ready to enjoy iPrescribe?</Typography>
              <Button sx={{fontSize:{xs:'12px',md:'14px'}}} variant="text" color="primary" endIcon={<ChevronRight />}>
                Join Waitlist
              </Button>
            </Box>
            <Box sx={{ maxWidth: 580, textAlign: {xs:'center', md:'left'} }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "41.5px", md: "62px" },
                  lineHeight: { xs: 1.2, md: '72px' },
                  color: "text.dark",
                }}
              >
                Your Bridge Between Care & Convenience
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Schedule consultations, send or receive e-prescriptions, and
                manage medications from one secure platform.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: {xs:2,md:4},
                mx: {xs:"auto", md:0},
              }}
            >
                {/* Google Play button */}
              <Box
                sx={{
                  display: "flex",
                  p: "6px 16px",
                  backgroundColor: "primary.black",
                  borderRadius: "12px",
                  width: {xs:'100%', md:"fit-content"},
                  height: {xs:'100%', md:"fit-content"},
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: { md: '150px' },
                  gap:2,
                }}
              >
                <Box component="img" src={icons.playstore} alt="Play store icon" sx={{
                    width:{xs:24, md:32}
                }}/>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                    <Typography sx={{color:'white', fontSize: 10}}>Coming Soon</Typography>
                    <Typography sx={{color:'white', fontSize: 16, fontWeight: 600}}>Google Play</Typography>
                </Box>
              </Box>

              {/* Apple Store button */}
              <Box
                sx={{
                  display: "flex",
                  p: "6px 16px",
                  backgroundColor: "primary.black",
                  borderRadius: "12px",
                  width: "fit-content",
                  height: "fit-content",
                  minWidth:{md:'150px'},
                  justifyContent: "center",
                  alignItems: "center",
                  gap:2,
                }}
              >
                <Box component="img" src={icons.apple} width={24} alt="Apple store icon"/>
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
                    <Typography sx={{color:'white', fontSize: 10}}>Coming Soon</Typography>
                    <Typography sx={{color:'white', fontSize: 16, fontWeight: 600}}>Appstore</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ------------- right side */}
          <Box component='img' src={images.heroImage} alt="hero image" 
          sx={{
            width:{xs:'100%', md:'630px'},
            mt:{md:2},
            position:'relative',
            right:{md:-30}
          }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
