import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Acco = () => {
    return (
        <div className="Acco">
            <h1>Material-UI Accordion Example</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Section 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Content for section 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Section 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Content for section 2
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Section 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Content for section 3
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
};

export default Acco;
