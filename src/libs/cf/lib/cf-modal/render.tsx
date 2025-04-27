"use client";

import { useUIState } from "@aces/store";
import { CfBaseComponent } from "@aces/types";
import { generateId } from "@aces/utils";
import { H4, Modal, ModalContent, ModalHeader } from "@aces/ui";
import { PardotForm, PardotFormProps } from "@aces/features";

import {
  CfRichTextSection,
  CfRichTextSectionProps,
} from "../cf-rich-text-section/render";

export interface CfModalProps extends CfBaseComponent {
  modalHeader?: string;
  modalBodyCollection: {
    items: (PardotFormProps | CfRichTextSectionProps)[];
  };
}

export const CfModal = ({
  internalTitle,
  modalHeader,
  modalBodyCollection,
  id,
  lang,
  preview,
}: CfModalProps) => {
  const { activeModal, setActiveModal } = useUIState();

  const modalId = generateId(internalTitle);
  const isOpen = activeModal === modalId;

  const handleSetOpen = (open: boolean) => {
    if (!open) setActiveModal(null);
    else setActiveModal(modalId);
  };

  return (
    <Modal open={isOpen} setOpen={handleSetOpen}>
      <>
        {modalHeader && (
          <ModalHeader>
            <H4>{modalHeader}</H4>
          </ModalHeader>
        )}
        <ModalContent>
          <>
            {modalBodyCollection.items.map((item, index) => {
              const typename = item.__typename;

              if (!typename) {
                return null;
              }

              const isCfRichText = (
                item: any,
              ): item is CfRichTextSectionProps => {
                return "grayBackground" in item;
              };

              const isPardotForm = (item: any): item is PardotFormProps => {
                return "pardotFormUrl" in item;
              };

              switch (typename) {
                case "RichTextSection":
                  if (isCfRichText(item)) {
                    return (
                      <CfRichTextSection
                        key={generateId(item.internalTitle)}
                        internalTitle={item.internalTitle}
                        alignment={item.alignment}
                        containerWidth={item.containerWidth}
                        grayBackground={item.grayBackground}
                        bodyCopy={item.bodyCopy}
                        border={item.border}
                        __typename={item.__typename}
                        nested={true}
                        id={id}
                        lang={lang}
                        preview={preview}
                      />
                    );
                  }
                case "PardotForm":
                  if (isPardotForm(item)) {
                    return (
                      <PardotForm
                        key={generateId(item.internalTitle)}
                        internalTitle={item.internalTitle}
                        pardotFormUrl={item.pardotFormUrl}
                        height={{ xs: "740px", md: "740px" }}
                      />
                    );
                  }
                default:
                  return null;
              }
            })}
          </>
        </ModalContent>
      </>
    </Modal>
  );
};
