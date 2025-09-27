import {
  Button,
  FormControl,
  TextareaAutosize,
  TextField,
} from "@mui/material";

export default function ContactUs() {
  return (
    <div
      className="w-[80%] mx-auto bg-primary-50 p-6 global-padding-t"
      id="contactMe"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-primary-500 global-padding-b text-left">
            Let&apos;s Connect! 💌
          </h2>
          If you ever want to grab a coffee/bubble tea (virtually) or just want
          a quick chat - you can find me on social media or you can send me a
          message here!
        </div>
        <div>
          <form className="grid gap-4">
            <FormControl
              id="name"
              fullWidth
              required
              variant="filled"
              color="info"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="Name"
                name="name"
              />
            </FormControl>
            <FormControl
              id="Id"
              fullWidth
              required
              variant="outlined"
              color="info"
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                placeholder="Email"
                name="email"
              />
            </FormControl>
            <FormControl
              id="Id"
              fullWidth
              required
              variant="outlined"
              color="primary"
            >
              <TextareaAutosize
                maxRows={4}
                minRows={4}
                aria-label="maximum height"
                placeholder="Message"
              />
            </FormControl>
            <Button color="primary" variant="outlined" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
