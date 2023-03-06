import { ThemeProvider } from "@mui/material/"
import { useSessionContext } from "supertokens-auth-react/recipe/session"
import { useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import Create from "./create"
import Link from "next/link"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import SessionReact from "supertokens-auth-react/recipe/session"
import SettingsIcon from "@mui/icons-material/Settings"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import Stack from "@mui/material/Stack"
import SuperTokensReact from "supertokens-auth-react"
import theme from "./theme"
import Typography from "@mui/material/Typography"

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
    <ThemeProvider theme={theme}>
      <Create />

      <Stack alignItems="center" direction="row" justifyContent="center" mt={4}>
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
    </ThemeProvider>
  )
}
