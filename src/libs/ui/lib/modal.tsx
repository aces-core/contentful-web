import React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import MuiModal, { ModalProps as MuiModalProps } from "@mui/material/Modal";

import { CustomCssProps, Size } from "@aces/types";
import { Box, FlexBox, Icon, IconButton } from "@aces/ui";

const maxWidthStyles = {
  small: "32rem",
  medium: "56rem",
  large: "68rem",
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
                <FlexBox justifyContent={"flex-end"}>
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={() => setOpen(false)}
                    style={{
                      marginTop: 4,
                      marginRight: 4,
                    }}
                  >
                    <Icon icon="Close" size={24} />
                  </IconButton>
                </FlexBox>
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
