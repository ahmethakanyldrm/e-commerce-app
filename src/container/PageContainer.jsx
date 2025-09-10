import React from "react";
import Container from "@mui/material/Container";

function PageContainer({ children }) {
  return (
    <div className="page-container">
      <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
        {children}
      </Container>
    </div>
  );
}

export default PageContainer;
