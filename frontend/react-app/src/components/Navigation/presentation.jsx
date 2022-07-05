import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';



const StyledToolbar = withStyles({
    root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
    root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledIconButton = withStyles({
    root: { margin: "0 0 0 auto" }
})(IconButton);

const StyledDatePicker = withStyles({
    root: { marginLeft: 30}
})(DatePicker);


const Navigation = ({setNextMonth, setPreviousMonth, setMonth, month}) => {
    return (
        <StyledToolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" />
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>
            <IconButton size="small" onClick={setPreviousMonth}>
                <ArrowBackIos />
            </IconButton>
            <IconButton size="small" onClick={setNextMonth}>
                <ArrowForwardIos />
            </IconButton>
            <StyledDatePicker
                value={month}
                onChange={setMonth}
                variant="inline"
                format="YYYY年 M月"
                animateYearScrolling
                disableToolbar
            />
            <StyledIconButton size="medium">
                <SearchIcon/>
            </StyledIconButton>
            <IconButton size="medium">
                <HelpOutlineIcon/>
            </IconButton>
            <IconButton size="medium">
                <SettingsIcon/>
            </IconButton>
            <IconButton size="medium">
                <AppsIcon/>
            </IconButton>
            <IconButton size="medium">
                <AccountCircleIcon style={{fontSize: 30}}/>
            </IconButton>
        </StyledToolbar>
    );
};

export default Navigation;