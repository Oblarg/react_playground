import React from 'react';
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import './eventDialog.css'
import {Fade} from "@material-ui/core";

interface EventDialogProps {
  date: Date;
  show: boolean;
  close: () => void;
}

export const EventDialog = React.memo<EventDialogProps>((props) => {
  return (
    <Modal
      aria-labelledby="Set Event"
      open={props.show}
      onClose={props.close}
      className="modal"
    >
      <Fade in={props.show}>
        <div className="background">
          <div>
            <h2 id="transition-modal-title">Calendar</h2>
            <p id="transition-modal-description">You have clicked the calendar</p>
              <Button color="primary" onClick={props.close}>
                Close me!
              </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  )
})