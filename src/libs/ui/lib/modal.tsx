import React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import MuiModal, { ModalProps as MuiModalProps } from "@mui/material/Modal";

import { CustomCssProps, Size } from "@maverick/types";
import { Box, FlexBox, Icon, IconButton } from "@maverick/ui";

const maxWidthStyles = {
  small: "32rem",
  medium: "44rem",
  large: "54rem",
};

interface ModalProps extends Omit<MuiModalProps, "style" | "sx"> {
  maxWidth?: Size;
  style?: CustomCssProps;
  children: React.ReactElement;
  setOpen: (open: boolean) => void;
}

export const Modal = ({
  open,
  maxWidth = "medium",
  style,
  children,
  onClose,
  setOpen,
}: ModalProps) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      sx={style}
      closeAfterTransition={true}
    >
      <Fade in={open}>
        <Box
          style={{
            position: "fixed",
            inset: 0,
            overflowY: "auto",
          }}
        >
          <FlexBox
            alignItems="center"
            justifyContent="center"
            style={{
              padding: {
                xs: "1rem",
                md: 0,
              },
              minHeight: "100%",
            }}
          >
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <Box
                style={{
                  position: "relative",
                  backgroundColor: "common.white",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  margin: {
                    xs: 0,
                    md: "2rem 0",
                  },
                  maxWidth: maxWidthStyles[maxWidth],
                  width: "100%",
                  outline: "none",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: "0.25rem",
                    right: "0.25rem",
                  }}
                >
                  <IconButton
                    color="primary"
                    size="large"
                    onClick={() => setOpen(false)}
                  >
                    <Icon icon="Close" size={24} />
                  </IconButton>
                </Box>
                {children}
              </Box>
            </ClickAwayListener>
          </FlexBox>
        </Box>
      </Fade>
    </MuiModal>
  );
};

Modal.displayName = "Modal";

interface ModalContentProps {
  children: React.ReactElement;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <Box
      padding="2rem"
      style={{
        width: "100%",
      }}
    >
      <Box>{children}</Box>
    </Box>
  );
};

Modal.Content = ModalContent;

interface ModalHeaderProps {
  style?: CustomCssProps;
  children: React.ReactElement;
}

export const ModalHeader = ({ style, children }: ModalHeaderProps) => {
  return <Box style={style}>{children}</Box>;
};

Modal.Header = ModalHeader;
