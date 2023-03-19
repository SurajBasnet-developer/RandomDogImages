import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Image } from "@chakra-ui/react";

const Dogimage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [requests, setRequests] = useState(0);
  useEffect(() => {
    generateImage();
  }, []);

  const generateImage = () => {
    axios
      .get("https://random.dog/woof.json")
      .then((response) => setImageUrl(response.data.url))
      .catch((error) => console.log(error));
  };

  function handleGenerate() {
    generateImage();
    setRequests(requests + 1);
  }

  return (
    <Box>
      <Image
        src={imageUrl}
        mb="4"
        boxSize="400px"
        objectFit="cover"
        borderRadius="full"
      />
      <Button
        onClick={handleGenerate}
        colorScheme="linkedin"
        size="lg"
        variant="outline"
      >
        Generate Image
      </Button>
    </Box>
  );
};

export default Dogimage;
