import "@/app/_styles/components/molecules/_font-modal.scss";

interface FontModalProps {
  isOpen: boolean;
}

export const FontModal = (props: FontModalProps) => {
  return props.isOpen && <div className="__font_modal"></div>;
};
