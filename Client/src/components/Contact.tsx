import { Button, Container, FormControl, FormGroup, FormLabel, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const USER_ID = import.meta.env.VITE_USER_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
        setLoading(true);
        emailjs.sendForm(
            SERVICE_ID,
           TEMPLATE_ID, 
            form.current, 
            USER_ID)
            .then((result) => {
                setLoading(false);
                console.log(result.text);
                setStatus(true);
            }, (error) => {
                setStatus(false);
                console.log(error);
            });
        setStatus(false);
    }
  };

  return (
    <Container component={"form"} ref={form} id="Contact" maxWidth="md" sx={{py:10}} onSubmit={sendEmail}>
        <FormControl component={"fieldset"} variant="standard" fullWidth>  
            <FormLabel component="legend">
                <Typography variant="h4" color="gray" component="h1" gutterBottom>
                    Contact Me
                </Typography>
            </FormLabel>
            <FormGroup>
                <TextField
                    margin="normal"
                    label="Name"
                    variant="outlined"
                    name="name"
                    
                />
                <TextField
                    margin="normal"
                    label="Email"
                    variant="outlined"
                    name="email"
                    
                />
                <TextField
                    margin="normal"
                    multiline
                    rows={4}
                    label="Message"
                    variant="outlined"
                    name="message"
                    
                />
                <Button variant="contained" type="submit" color={status ? `success` : 'secondary'}>
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </FormGroup>
        </FormControl>
    </Container>
  )
}
export default Contact