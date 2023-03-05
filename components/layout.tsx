import { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import Backdrop from "@mui/material/Backdrop"
import Fab from "@mui/material/Fab"
import Link from "next/link"
import LogoutIcon from "@mui/icons-material/Logout"
import SettingsIcon from "@mui/icons-material/Settings"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import SessionReact from "supertokens-auth-react/recipe/session"
import SuperTokensReact from "supertokens-auth-react"
import { useSessionContext } from "supertokens-auth-react/recipe/session"
import LoginIcon from "@mui/icons-material/Login"

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const session: { loading: boolean; doesSessionExist?: boolean } = useSessionContext()
  async function handleLogout() {
    await SessionReact.signOut()
    SuperTokensReact.redirectToAuth()
  }
  async function handleLogin() {
    await SessionReact.signOut()
    SuperTokensReact.redirectToAuth()
  }

  return (
    <>
      <Stack
        alignItems="center"
        sx={{ bottom: 60, left: 0, m: "0 auto", position: "absolute", right: 0 }}
      >
        <Link href="/create">
          <Fab aria-label="add" variant="extended">
            <AddIcon sx={{ mr: 0.5 }} /> Create
          </Fab>
        </Link>
      </Stack>

      <Stack alignItems="center" direction="row" justifyContent="center" mt={3}>
        <Link href="/">
          <Typography
            fontSize={20}
            fontWeight={300}
            sx={{
              letterSpacing: 2,
              maskImage:
                "linear-gradient(-75deg, rgba(0,0,0,.8) 30%, #000 50%, rgba(0,0,0,.8) 70%)",
              maskSize: "200%",
              animation: "shine 4s linear infinite",
            }}
            variant="h1"
          >
            OpenFuse
          </Typography>
        </Link>

        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", top: 16, right: 16 }}
          icon={<SettingsIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="down"
          FabProps={{ sx: { background: "transparent" } }}
        >
          {session.doesSessionExist ? (
            <SpeedDialAction
              icon={<LogoutIcon />}
              tooltipTitle="Logout"
              tooltipOpen
              onClick={handleLogout}
            />
          ) : (
            <SpeedDialAction
              icon={<LoginIcon />}
              tooltipTitle="Login"
              tooltipOpen
              onClick={handleLogin}
            />
          )}
        </SpeedDial>
      </Stack>
      {children}
    </>
  )
}
