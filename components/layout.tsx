import AddIcon from "@mui/icons-material/Add"
import Fab from "@mui/material/Fab"
import Link from "next/link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function Layout({ children }) {
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
      <Stack alignItems="center" mt={3}>
        <Link href="/" as="/" passHref legacyBehavior>
          <a>
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
          </a>
        </Link>
      </Stack>
      {children}
    </>
  )
}
