import React from "react";
import Navbar from "../components/navbar";
import { Box, Button } from "@chakra-ui/react";
import CardExtendido from "../components/cardExtendido";

function Home(){

    return(
        <div>
            <Navbar></Navbar>
            <Box>
                <CardExtendido title='lorem ipsum' link='https://google.com' description='lorem ipsum sit dolor amet'/>
            </Box>
            <Box>
                <Button colorPalette='green' variant={'solid'}>Button</Button>
            </Box>
        </div>

    );
}

export default Home;