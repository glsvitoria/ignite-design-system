import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",

  variantes: {
    size: {
      sm: {
        padding: "$2 $3",
      },
      md: {
        padding: "$3 $4",
      },
    },
  },

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular",
});

export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  backgroundColor: "transparent",
  border: "none",
  width: "100%",

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray900",
  },

  defaultVariants: {
    size: "md",
  },
});
