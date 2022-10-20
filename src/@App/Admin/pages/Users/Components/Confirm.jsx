import React from 'react'
import PropTypes from 'prop-types'

const Confirm = props => {
    const { className, control, title, content } = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {<Typography>{title}</Typography>}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {<Typography>{content}</Typography>}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
    )
}

Confirm.defaultProps = {
	className: null
}

Confirm.propTypes = {
	className: PropTypes.string,
	control: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default React.memo(Confirm)
