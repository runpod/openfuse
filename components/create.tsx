import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import Fab from "@mui/material/Fab"
import Stack from "@mui/material/Stack"
import SuperTokensReact from "supertokens-auth-react"
import { useSessionContext } from "supertokens-auth-react/recipe/session"
import Drawer from "@mui/material/Drawer"
import TextField from "@mui/material/TextField"
import { Button, Container, Grid, Typography } from "@mui/material"
import Slider from "@mui/material/Slider"

export default function Layout() {
  const session: { loading: boolean; doesSessionExist?: boolean } = useSessionContext()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    if (open) return setOpen(false)
    if (session.doesSessionExist) setOpen(true)
    else SuperTokensReact.redirectToAuth()
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <Stack
        alignItems="center"
        sx={{ bottom: 60, left: 0, m: "0 auto", position: "fixed", right: 0, zIndex: 9999 }}
      >
        <Fab
          aria-label="add"
          onClick={handleOpen}
          sx={{ transition: "width 5s ease-in-out" }}
          variant={open ? "circular" : "extended"}
        >
          <AddIcon
            sx={{
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform .2s ease-in-out",
              mr: open ? 0 : 0.5,
            }}
          />{" "}
          {open ? "" : "Create"}
        </Fab>
      </Stack>

      <Drawer
        anchor="bottom"
        elevation={2}
        hideBackdrop
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, .2)",
            height: "calc(100% - 90px)",
            pt: 4,
          },
        }}
      >
        <Container maxWidth="xs">
          <Grid container spacing={3}>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="prompt"
                label="Describe your image"
                maxRows={6}
                multiline
                placeholder="test"
                size="medium"
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                id="negative-prompt"
                label="Exclude details"
                maxRows={4}
                multiline
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography>Steps</Typography>
                <Typography>25</Typography>
              </Stack>
              <Slider
                aria-label="Stephs"
                defaultValue={25}
                max={50}
                min={20}
                size="small"
                valueLabelDisplay="off"
              />
            </Grid>
            <Grid item md={6}>
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography>Guidance Scale</Typography>
                <Typography>8</Typography>
              </Stack>
              <Slider
                aria-label="Guidance Scale"
                defaultValue={8}
                max={14}
                min={4}
                size="small"
                valueLabelDisplay="off"
              />
            </Grid>
            <Grid item md={12} textAlign="center">
              <Button color="secondary" variant="outlined">
                Generate
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </>
  )
}
