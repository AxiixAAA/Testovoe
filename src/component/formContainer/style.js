import { styled } from "@mui/material";

export const useAppStyles = () => {
  const ContainerFormMUI = styled("div")(({ theme }) => ({
    // width: "20vw",
    width: "260px",
    // minWidth: "375px",

    background: "#171929",
    borderRadius: "37px",

    padding: "15px 45px",

    "& p": {
      fontSize: "18px",
      fontWeight: "400",
    },
    "& h3": {
      fontSize: "15px",
      fontWeight: "300",
      color: "#797EA3",
    },


    
    "& 	.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
      color: "#797EA3",
      fontSize: "15px",
    },
    "& 	.css-1d1r5q-MuiFormHelperText-root.Mui-error": {
      color: "red",
      fontSize: "12px",
    },
    "& 	.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root.activ": {
      color: "#797EA3",
    },
    "& 	.css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused, .css-66dh3a-MuiInputBase-input-MuiInput-input, ": {
      color: "#FFFFFF",
    },
    "& 	.css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
      color: "#797EA3",
    },
    "& 	.css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      color: "white",
    },
    "& 	.css-1a1fmpi-MuiInputBase-root-MuiInput-root:after, .css-g9cew8-MuiInputBase-root-MuiInput-root:after": {
      borderBottom: "1px solid #797EA3",
    },
    
    "& 	label[data-shrink=false]+.MuiInputBase-formControl .css-1x51dt5-MuiInputBase-input-MuiInput-input":
      {
        padding: "0px 0px 10px 0px",
      },
    "& .css-1a1fmpi-MuiInputBase-root-MuiInput-root": {
      padding: "0px 0px 10px 0px",
    },

    "& .css-i4bv87-MuiSvgIcon-root": {
      fontSize: "2rem",
    },
    "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
      color: "#797EA3",
      padding: "0px",
    },
    "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate":
      {
        color: "#2C2F47",
      },
    "& .css-u4tvz2-MuiFormLabel-root": {
      color: "#797EA3",
      fontSize: "14px",
    },
    "& .css-1nrlq1o-MuiFormControl-root": {
      width: "100%",
    },
    "& .css-1d1r5q-MuiFormHelperText-root.Mui-error": {
        textAlign: 'right'
    },

    "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
      backgroundColor: "#2C2F47 !important",
      borderRadius: "28px",
      fontSize: "18px",
      fontWeight: "300",
      width: "121px",
    },
    "& textarea::-webkit-scrollbar": {
        width: '0px',
    },

    [theme.breakpoints.between(0, 600)]: {
      width: "260px",
      borderRadius: "17px",
      padding: "15px 35px",

      "& p": {
        fontSize: "14px",
        margin: '0px'

      },
      "& h3": {
        fontSize: "12px",
      },    
      "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
        width: "221px",
      },
    },
  }));

  return {
    ContainerFormMUI,
  };
};
