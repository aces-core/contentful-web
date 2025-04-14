"use client";

import { useEffect, useRef, useState } from "react";
import { css, Global } from "@emotion/react";

import { useTheme } from "@aces/hooks";
import { fontWeights, ThemeType, typography } from "@aces/theme";
import { Box } from "@aces/ui";

import { FormSkeleton } from "../skeleton";

export interface HubSpotFormProps {
  hsPortalId: string;
  hsFormId: string;
  __typename?: string;
}

export const HubSpotForm = ({ hsPortalId, hsFormId }: HubSpotFormProps) => {
  const theme = useTheme();

  const [formLoaded, setFormLoaded] = useState(false);
  const formRef = useRef(null);

  const id = `hsForm${hsFormId}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: hsPortalId,
          formId: hsFormId,
          target: `#${id}`,
          onFormReady: () => {
            setFormLoaded(true);
          },
        });
      }
    });
  }, [hsFormId, hsPortalId, id]);

  return (
    <Box ref={formRef} style={{ width: "100%" }}>
      <Global
        styles={createStyle({
          theme,
          id,
        })}
      />
      {!formLoaded && <FormSkeleton />}
      <Box id={id}></Box>
    </Box>
  );
};

const createStyle = ({ theme, id }: { theme: ThemeType; id: string }) => {
  const sharedInputStyles = css`
    background: ${theme.palette.grey[100]};
    border: 1px solid ${theme.palette.grey[300]};
    width: 100%;
    font-size: 1rem;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    font-weight: 400;
    font-family: inherit;
  `;

  const sharedFocusBorderStyle = css`
    outline: 0;
  `;

  const baseFormStyles = css`
    form {
      max-width: 800px;
    }

    label {
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.25rem;
      display: inline-block;
      font-weight: 600;
      font-family: ${typography.fontFamily};
    }

    ul {
      list-style: none;
    }

    input {
      ${sharedInputStyles}
      padding: 0.25rem .5rem;
      line-height: 1;
      height: 40px;

      &:not([type="submit"]):focus {
        ${sharedFocusBorderStyle}
      }

      &:hover {
        cursor: pointer;
        transition:
          color 0.15s ease-in-out,
          background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out;
      }
    }

    textarea {
      ${sharedInputStyles}
      min-height: 150px;

      &:focus {
        ${sharedFocusBorderStyle}
      }
    }

    select {
      ${sharedInputStyles}
      height: 40px;
      padding: 0.5rem 0.5rem;

      &:focus {
        ${sharedFocusBorderStyle}
      }
    }

    .hs-form-field {
      margin-bottom: 20px;
    }

    .hs-error-msgs,
    .invalid-tooltip {
      color: ${theme.palette.error.main};
      padding-left: 0;
      font-size: 0.875rem;
    }

    .hs-main-font-element {
      margin: 0;
      padding: 0.25rem 0.5rem;
    }

    .actions {
      padding-top: 18px;
    }

    .hs-button {
      font-family: ${typography.fontFamily};
      border-radius: 10px;
      background-color: ${theme.palette.primary.main};
      width: 100% !important;
      color: ${theme.palette.common.white};
      font-weight: ${fontWeights.bold};
      text-transform: uppercase;
      padding: 13px 15px;
      height: 60px;

      &:hover {
        background-color: ${theme.palette.primary.dark};
      }

      &:focus {
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.text.primary};
      }
    }
  `;

  return css`
    #${id} {
      ${baseFormStyles}
    }
  `;
};
