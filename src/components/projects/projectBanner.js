import React from "react";

// Styled components
import { Container, Flex } from "../../styles/globalStyles";
import {
    ProjectSection
} from "../../styles/projectStyles";

const ProjectBanner = ({section}) => {
    return (
            <Container fluid>
                <ProjectSection>{section}</ProjectSection>
                {/* <ProjectSubtitle>{section.detail}</ProjectSubtitle> */}
            </Container>
    );
};

export default ProjectBanner;