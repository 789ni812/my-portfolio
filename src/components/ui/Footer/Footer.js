import React from "react";

import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { AiFillLinkedin } from "react-icons/ai";

import { MdEmail } from "react-icons/md";
const Footer = () => {
  const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #47624fff;
    border-radius: 3px;
    display: block;
    a:link {
      color: black;
      text-decoration: none;
    }

    a:visited {
      color: black;
      text-decoration: none;
    }

    a:hover {
      color: #47624fff;
      text-decoration: underline;
    }

    a:active {
      color: black;
      text-decoration: none;
    }
  `;

  return (
    <Card data-test="dt-getInTouch">
      <h3 align="center">Want to get in touch?</h3>
      <CardContent>
        <p>
          I'm currently available for work so please feel free to contact me.
        </p>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Button>
              <a href="https://www.linkedin.com/in/stuart-bradford-2a751b3/">
                <AiFillLinkedin /> LinkedIn
              </a>
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button>
              <a href="mailto:bradfordstuart+sbs@gmail.com">
                <MdEmail /> Email
              </a>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Footer;
