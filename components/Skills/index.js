import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import Label from '@mui/icons-material/Label';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Progress from '../Progress';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

function StyledTreeItem(props) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        progressBar,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />

                    <Typography variant="body2" sx={{ fontWeight: 'inherit', marginRight: "1em" }}>
                        {labelText}
                    </Typography>

                    {progressBar}

                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>

                </Box>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

function getLabel(progress) {
    if (progress >= 0 && progress < 30) {
        return "Principiante"
    } else if (progress >= 30 && progress < 60) {
        return "Medio"
    } else if (progress >= 60 && progress <= 100) {
        return "Avanzado"
    }
}

export default function Skills({ title, fields, id }) {
    return (
        <TreeView
            aria-label="skills progress"
            defaultExpanded={['1000']}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
        >
            <StyledTreeItem nodeId={id} labelText={title} labelIcon={Label}>
                {fields?.map((field) => {
                    return (
                        <StyledTreeItem
                            key={field.label}
                            nodeId={field.id}
                            labelText={field.label}
                            labelInfo={getLabel(field.progress)}
                            color="#1a73e8"
                            bgColor="#e8f0fe"
                            progressBar={<Progress progress={field.progress} />}
                        />
                    )
                })}

            </StyledTreeItem>

        </TreeView>
    );
}