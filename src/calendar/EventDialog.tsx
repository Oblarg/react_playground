import React from 'react';
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

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
    >
      <div>
        <div>
          <h2>
            "Test modal!"
        </h2>
          <p>
            "This is a modal dialog"
        </p>
        </div>
        <div>
          <Button
            onClick={props.close}
          >
            Close me!
        </Button>
        </div>
      </div>
    </Modal>
  )
})