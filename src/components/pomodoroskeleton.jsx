import { useState } from "react";

import { 

  AppBar, 
  Box,
  Card,
  Container,
  CssBaseline,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Tab,
  Tabs,
  Toolbar, 
  Typography,

} from "@mui/material";

import {

  AddCircleOutline,
  PlayArrow,
  Refresh,
  RemoveCircleOutline,
  Settings,
  WatchLater,

} from "@mui/icons-material"

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export function PomodoroSkeleton(props) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <CssBaseline />

      <AppBar position='relative'>
        <Container maxWidth='sm'>
            <Toolbar sx={{ maxWidth: 'sm' }} disableGutters="true">
              <Tabs value={value} onChange={handleChange} sx={{ width: '100%', p: 0 }}>
                <Tab icon={<WatchLater />} sx={{ height: '64px', flexGrow: '1' }} />
                <Tab icon={<Settings />} sx={{ height: '64px', flexGrow: '1' }} />
              </Tabs>
            </Toolbar>
        </Container>
      </AppBar>
      
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>

            <Stack spacing={2} divider={<Divider />}>
    
              <Card 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '4rem 0'
                }}
              >
                <Typography variant='h4'>Session</Typography>
                <Typography variant='h2'>25:00</Typography>
              </Card>

              <Card 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <List sx={{ width: '100%' }}>
                <ListItem
                  secondaryAction={
                    <Stack direction="row">
                      <IconButton
                        size="large"
                        color="secondary"
                      >
                        <RemoveCircleOutline />
                      </IconButton>
                      <div style={{ padding: '12px 0'}}>
                        25
                      </div>
                      <IconButton
                        size="large"
                        color="secondary"
                      >
                        <AddCircleOutline />
                      </IconButton>
                    </Stack>
                  }
                >
                  <ListItemText
                    primary={'Session Length'}
                  />
                </ListItem>

                <Divider />

                <ListItem
                  secondaryAction={
                    <Stack direction="row">
                      <IconButton
                        size="large"
                        color="secondary"
                      >
                        <RemoveCircleOutline />
                      </IconButton>
                      <div style={{ padding: '12px 0'}}>
                        25
                      </div>
                      <IconButton
                        size="large"
                        color="secondary"
                      >
                        <AddCircleOutline />
                      </IconButton>
                    </Stack>
                  }
                >
                  <ListItemText
                    primary={'Break Length'}
                  />
                </ListItem>
                </List>

              </Card>

            </Stack>
            
          </Container>
        </Box>
      </main>

      <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          {/* <StyledFab color='secondary'>
            <PlayArrow />
          </StyledFab> */}
          <Box sx={{ 
            width: '136px',
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
          }}>
            <Fab color='secondary' sx={{ margin: '0 6px'}}>
              <PlayArrow />
            </Fab>
            <Fab color='primary' sx={{ margin: '0 6px'}}>
              <Refresh />
            </Fab>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

// position: 'absolute',
// zIndex: 1,
// top: -30,
// left: 0,
// right: 0,
// margin: '0 auto',