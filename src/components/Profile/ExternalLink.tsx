import React from 'react';
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function ExternalLink() {
  <div>
  <IconButton
                aria-label="github"
                onClick={() => {
                  window.open("https://github.com/");
                }}
                color="inherit"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                onClick={() => {
                  window.open("https://instagram.com/");
                }}
                color="inherit"
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="facebook"
                onClick={() => {
                  window.open("https://facebook.com/");
                }}
                color="inherit"
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="google"
                onClick={() => {
                  window.open("https://google.com/");
                }}
                color="inherit"
              >
                <GoogleIcon fontSize="large" />
              </IconButton>
              </div>
}

export default ExternalLink;