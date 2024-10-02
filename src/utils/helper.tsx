import NoPriorityIcon from './icons_FEtask/No-priority.svg';
import LowPriorityIcon from './icons_FEtask/Img - Low Priority.svg';
import MediumPriorityIcon from './icons_FEtask/Img - Medium Priority.svg';
import HighPriorityIcon from './icons_FEtask/Img - High Priority.svg';
import UrgentIcon from './icons_FEtask/SVG - Urgent Priority colour.svg';

import BacklogIcon from './icons_FEtask/Backlog.svg';
import TodoIcon from './icons_FEtask/To-do.svg';
import InProgressIcon from './icons_FEtask/in-progress.svg';
import DoneIcon from './icons_FEtask/Done.svg';
import CanceledIcon from './icons_FEtask/Cancelled.svg';

// Priority Icon Getter
export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={NoPriorityIcon} alt="No Priority" width={14} />
        case "Low": return <img src={LowPriorityIcon} alt="Low Priority" width={14} />
        case "Medium": return <img src={MediumPriorityIcon} alt="Medium Priority" width={14} />
        case "High": return <img src={HighPriorityIcon} alt="High Priority" width={14} />
        case "Urgent": return <img src={UrgentIcon} alt="Urgent" width={14} />
        default: return <img src={UrgentIcon} alt="Urgent" width={14} />
    }
}

// Status Icon Getter
export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <img src={BacklogIcon} alt="Backlog" width={24} />
        case "Todo": return <img src={TodoIcon} alt="Todo" width={24} />
        case "In progress": return <img src={InProgressIcon} alt="In Progress" width={16} />
        case "Done": return <img src={DoneIcon} alt="Done" width={16} />
        case "Canceled": return <img src={CanceledIcon} alt="Canceled" width={16} />
        default: return <img src={CanceledIcon} alt="Canceled" width={16} />
    }
}
