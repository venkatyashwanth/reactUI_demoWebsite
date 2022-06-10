import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem,List, ListItem, ListItemText,ListItemAvatar,Divider, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
          <Avatar alt="Travis Howard" src="https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/w320-h640/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg" />
          <Avatar alt="Cindy Baker" src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
          <Avatar alt="Trevor Henderson" src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Profile-Picture-4.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Photo Gallery</Typography>
        <ImageList cols={4} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/barbary-macaque-picture-id824860820?k=20&m=824860820&s=612x612&w=0&h=W8783ZGcqMfDMJoXvBAyDFcSjnOWdKqKhgLGvf-VIuU="
              alt="post1"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
              alt="post2"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7f0718a8a5451b88475559f0819a35cd"
              alt="post3"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th-thumbnailer.cdn-si-edu.com/Oa5-BDp6qcarNc9yxAvKivfU6RI=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d1/27/d127ac61-a3f3-4a26-a4f4-f855de632580/phenom-endings-space-jan14.jpg"
              alt="post4"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar