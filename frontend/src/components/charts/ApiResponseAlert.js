import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const ApiResponseAlert = (data) => {
  console.log(data);
  return (
    <>
      {data && data.apiResponse && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr="{0}" />
          <AlertTitle mt="{4}" mb="{1}" fontSize="lg">
            {data.apiResponse.message}
          </AlertTitle>
        </Alert>
      )}
    </>
  );
};

export default ApiResponseAlert;
