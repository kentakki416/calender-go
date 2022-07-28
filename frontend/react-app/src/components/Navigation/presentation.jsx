import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography, withStyles, Tooltip } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze"
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import Button from '@material-ui/core/Button';



const StyledToolbar = withStyles({
    root: { padding: "0",
            marginLeft: "10px"}
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

const StyledButton = withStyles({
    root: {marginRight: "30px"}
})(Button);


const Navigation = ({setCurrentMonth, setNextMonth, setPreviousMonth, setMonth, month, changeActive}) => {
    return (
        <StyledToolbar>
            <IconButton onClick={changeActive}>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" width="40" height="40" alt="calendar" />
            <StyledTypography color="textSecondary" variant="h5" component="h1">
                カレンダー
            </StyledTypography>
            <StyledButton variant="outlined" onClick={setCurrentMonth} size="small">Today</StyledButton>
            <Tooltip title="前の月" placement="bottom">
                <IconButton size="small" onClick={setPreviousMonth}>
                    <ArrowBackIos />
                </IconButton>
            </Tooltip>
            <Tooltip title="次の月" placement="bottom">
                <IconButton size="small" onClick={setNextMonth}>
                    <ArrowForwardIos />
                </IconButton>
            </Tooltip>
            <StyledDatePicker
                value={month}
                onChange={setMonth}
                variant="inline"
                format="YYYY年 M月"
                animateYearScrolling
                disableToolbar
            />
            <Tooltip title="検索" placement="bottom">
                <StyledIconButton size="medium">
                    <SearchIcon/>
                </StyledIconButton>
            </Tooltip>
            <Tooltip title="ヘルプ" placement="bottom">
                <IconButton size="medium">
                    <HelpOutlineIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="設定" placement="bottom">
                <IconButton size="medium">
                    <SettingsIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="アプリ" placement="bottom">
                <IconButton size="medium">
                    <AppsIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="アカウント" placement="bottom">
                <IconButton size="medium">
                    <AccountCircleIcon style={{fontSize: 30}}/>
                </IconButton>
            </Tooltip>
        </StyledToolbar>
    );
};

export default Navigation;