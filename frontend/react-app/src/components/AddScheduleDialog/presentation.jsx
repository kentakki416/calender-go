import React from "react";
import { Dialog, DialogContent, TextField, DialogActions, Button, Input, Grid, withStyles, IconButton } from "@material-ui/core";

import { LocationOnOutlined, NotesOutlined, AccessTime, Close } from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";


const spacer = { margin: "4px 0"};

const Title = withStyles({ 
    root: {marginBottom: 32, fontSize:22 }
})(Input);

const AddScheduleDialog = ({
    schedule: {
        form:{title, location, description, date},
        isDialogOpen
    }, 
    closeDialog, 
    setSchedule,
    saveSchedule
}) => {
    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <div style={{textAlign:"right"}}>
                <IconButton onClick={closeDialog} size="small">
                    <Close/>
                </IconButton>
            </div>
            <DialogContent>
                <Title 
                    autoFocus 
                    fullWidth 
                    placeholder="タイトルと日時を追加"
                    value={title}
                    onChange={e => setSchedule({title: e.target.value})}
                />
                <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <AccessTime/>
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                            value={date}
                            onChange={d => setSchedule({ date: d})}
                            variant="inline"
                            format="YYYY年M月D日"
                            animateYearScrolling
                            fullWidth
                            style={spacer}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <LocationOnOutlined/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                            style={spacer} 
                            fullWidth 
                            placeholder="場所を追加"
                            value={location}
                            onChange={e => setSchedule({ location: e.target.value})}
                        />
                    </Grid>
                    <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <NotesOutlined/>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                style={spacer} 
                                fullWidth 
                                placeholder="説明を追加"
                                value={description}
                                onChange={e => setSchedule({ description: e.target.value})}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={saveSchedule}>
                    保存
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddScheduleDialog;