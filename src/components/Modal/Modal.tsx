import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./style.scss";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: any;
  content?: {
    comment: string;
    customTime: string;
    entrance: string;
    floor: string;
    houseNumber: string;
    name: string;
    officeNumber: string;
    orderTime: string;
    phone: string;
    pickupAdress: string;
    street: string;
    typeOfDelivery: string;
    typeOfPayment: string;
    agreement: boolean;
  };
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({
  setIsModalOpen,
  isModalOpen,
  content,
}: Props): JSX.Element => {
  const handleClose = () => setIsModalOpen(false);
  const entries = Object.entries(content || {});

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {entries.map(([key, value]) => (
          <>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="modal__str"
            >
              <span>{key}</span>
              <span>{value}</span>
            </Typography>
            <hr className="modal__hr" />
          </>
        ))}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
