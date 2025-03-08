
export interface Contractor {
  id: number;
  name: string;
  agency: string;
  role: string;
  department: string;
  startDate: string;
  badgeId: string;
  hourlyRate: number;
  weeklyHourLimit: number;
  photo: string;
  status: "active" | "inactive" | "warning";
}

export interface Agency {
  id: number;
  name: string;
  contractorCount: number;
  activeContracts: number;
  contactPerson: string;
  email: string;
  phone: string;
}

export interface TimeEntry {
  id: number;
  contractorId: number;
  date: string;
  checkIn: string;
  checkOut: string;
  hoursWorked: number;
  isWeekend: boolean;
  isRamadan: boolean;
  isOvertime: boolean;
}

export interface BudgetData {
  month: string;
  planned: number;
  actual: number;
}

export interface DepartmentData {
  name: string;
  contractorCount: number;
  budgetPercentage: number;
  totalHours: number;
  averageRate: number;
}

// Mock contractors data
export const contractors: Contractor[] = [
  {
    id: 1,
    name: "Ahmed Bensouda",
    agency: "Tech Solutions Maroc",
    role: "Développeur Java",
    department: "IT",
    startDate: "2023-01-15",
    badgeId: "CT00123",
    hourlyRate: 350,
    weeklyHourLimit: 40,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "active"
  },
  {
    id: 2,
    name: "Fatima Zahra El Moussaoui",
    agency: "Data Experts",
    role: "Data Analyst",
    department: "Business Intelligence",
    startDate: "2022-10-08",
    badgeId: "CT00124",
    hourlyRate: 320,
    weeklyHourLimit: 40,
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    status: "warning"
  },
  {
    id: 3,
    name: "Karim Tazi",
    agency: "Systèmes Financiers",
    role: "Consultant SAP",
    department: "Finance",
    startDate: "2023-03-22",
    badgeId: "CT00125",
    hourlyRate: 400,
    weeklyHourLimit: 35,
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "active"
  },
  {
    id: 4,
    name: "Nadia Benkhadra",
    agency: "Tech Solutions Maroc",
    role: "UX Designer",
    department: "Digital",
    startDate: "2022-11-11",
    badgeId: "CT00126",
    hourlyRate: 330,
    weeklyHourLimit: 40,
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    status: "active"
  },
  {
    id: 5,
    name: "Mohamed El Amrani",
    agency: "InfoSys Consulting",
    role: "Architecte Solutions",
    department: "IT",
    startDate: "2022-08-30",
    badgeId: "CT00127",
    hourlyRate: 420,
    weeklyHourLimit: 40,
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "inactive"
  },
  {
    id: 6,
    name: "Saida Benjelloun",
    agency: "Data Experts",
    role: "Développeur Frontend",
    department: "Digital",
    startDate: "2023-02-17",
    badgeId: "CT00128",
    hourlyRate: 340,
    weeklyHourLimit: 40,
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    status: "active"
  },
  {
    id: 7,
    name: "Rachid Hamdaoui",
    agency: "Systèmes Financiers",
    role: "Consultant Cybersécurité",
    department: "Sécurité",
    startDate: "2022-12-05",
    badgeId: "CT00129",
    hourlyRate: 410,
    weeklyHourLimit: 35,
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    status: "active"
  },
  {
    id: 8,
    name: "Leila Kadiri",
    agency: "InfoSys Consulting",
    role: "Cheffe de Projet",
    department: "PMO",
    startDate: "2023-04-10",
    badgeId: "CT00130",
    hourlyRate: 380,
    weeklyHourLimit: 45,
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    status: "warning"
  }
];

// Mock agencies data
export const agencies: Agency[] = [
  {
    id: 1,
    name: "Tech Solutions Maroc",
    contractorCount: 12,
    activeContracts: 10,
    contactPerson: "Hassan Alaoui",
    email: "contact@techsolutions.ma",
    phone: "+212 522 123 456"
  },
  {
    id: 2,
    name: "Data Experts",
    contractorCount: 8,
    activeContracts: 7,
    contactPerson: "Samira El Fassi",
    email: "info@dataexperts.ma",
    phone: "+212 522 789 012"
  },
  {
    id: 3,
    name: "Systèmes Financiers",
    contractorCount: 6,
    activeContracts: 5,
    contactPerson: "Omar Benjelloun",
    email: "contact@sysfinance.ma",
    phone: "+212 522 345 678"
  },
  {
    id: 4,
    name: "InfoSys Consulting",
    contractorCount: 9,
    activeContracts: 8,
    contactPerson: "Amina Berrada",
    email: "info@infosysmaroc.ma",
    phone: "+212 522 901 234"
  }
];

// Generate time entries for contractors
export const generateTimeEntries = (): TimeEntry[] => {
  const entries: TimeEntry[] = [];
  const currentDate = new Date();
  
  // Generate entries for the last 30 days
  for (let day = 0; day < 30; day++) {
    const entryDate = new Date(currentDate);
    entryDate.setDate(entryDate.getDate() - day);
    
    const dateStr = entryDate.toISOString().split('T')[0];
    const isWeekend = entryDate.getDay() === 0 || entryDate.getDay() === 6;
    const isRamadan = dateStr >= "2023-03-22" && dateStr <= "2023-04-21"; // Example Ramadan period
    
    contractors.forEach(contractor => {
      if (Math.random() > 0.1) { // 90% chance of having an entry for a contractor on a given day
        // Skip some weekend days
        if (isWeekend && Math.random() > 0.3) return;
        
        // Randomize check-in time (between 7:30 and 9:30)
        const checkInHour = 7 + Math.floor(Math.random() * 2);
        const checkInMinute = Math.floor(Math.random() * 60);
        const checkIn = `${checkInHour.toString().padStart(2, '0')}:${checkInMinute.toString().padStart(2, '0')}`;
        
        // Calculate work duration (7-10 hours, shorter for Ramadan)
        let workDuration = 8 + (Math.random() * 2 - 1);
        if (isRamadan) workDuration = 6 + (Math.random() * 1.5 - 0.5);
        if (isWeekend) workDuration = 4 + (Math.random() * 2);
        
        // Calculate check-out time
        const checkOutHour = checkInHour + Math.floor(workDuration);
        const checkOutMinute = checkInMinute + Math.round((workDuration - Math.floor(workDuration)) * 60);
        const checkOut = `${(checkOutHour + Math.floor(checkOutMinute / 60)).toString().padStart(2, '0')}:${(checkOutMinute % 60).toString().padStart(2, '0')}`;
        
        // Determine if it's overtime
        const isOvertime = workDuration > (contractor.weeklyHourLimit / 5);
        
        entries.push({
          id: entries.length + 1,
          contractorId: contractor.id,
          date: dateStr,
          checkIn,
          checkOut,
          hoursWorked: parseFloat(workDuration.toFixed(2)),
          isWeekend,
          isRamadan,
          isOvertime
        });
      }
    });
  }
  
  return entries;
};

export const timeEntries = generateTimeEntries();

// Mock budget data
export const budgetData: BudgetData[] = [
  { month: "Jan", planned: 1200000, actual: 1150000 },
  { month: "Fév", planned: 1200000, actual: 1180000 },
  { month: "Mar", planned: 1300000, actual: 1350000 },
  { month: "Avr", planned: 1300000, actual: 1320000 },
  { month: "Mai", planned: 1250000, actual: 1290000 },
  { month: "Juin", planned: 1250000, actual: 1230000 },
  { month: "Juil", planned: 1200000, actual: 1100000 },
  { month: "Août", planned: 1150000, actual: 1050000 },
  { month: "Sep", planned: 1300000, actual: 1280000 },
  { month: "Oct", planned: 1350000, actual: 1370000 },
  { month: "Nov", planned: 1350000, actual: 1300000 },
  { month: "Déc", planned: 1280000, actual: 1250000 }
];

// Department data
export const departmentData: DepartmentData[] = [
  {
    name: "IT",
    contractorCount: 18,
    budgetPercentage: 35,
    totalHours: 2860,
    averageRate: 380
  },
  {
    name: "Digital",
    contractorCount: 12,
    budgetPercentage: 20,
    totalHours: 1920,
    averageRate: 350
  },
  {
    name: "Finance",
    contractorCount: 8,
    budgetPercentage: 15,
    totalHours: 1280,
    averageRate: 410
  },
  {
    name: "Business Intelligence",
    contractorCount: 6,
    budgetPercentage: 12,
    totalHours: 960,
    averageRate: 330
  },
  {
    name: "PMO",
    contractorCount: 5,
    budgetPercentage: 10,
    totalHours: 800,
    averageRate: 360
  },
  {
    name: "Sécurité",
    contractorCount: 4,
    budgetPercentage: 8,
    totalHours: 640,
    averageRate: 420
  }
];

// Helper functions
export const getContractorById = (id: number): Contractor | undefined => {
  return contractors.find(contractor => contractor.id === id);
};

export const getAgencyByName = (name: string): Agency | undefined => {
  return agencies.find(agency => agency.name === name);
};

export const getTimeEntriesForContractor = (contractorId: number): TimeEntry[] => {
  return timeEntries.filter(entry => entry.contractorId === contractorId);
};

export const calculateTotalHoursForContractor = (contractorId: number): number => {
  return getTimeEntriesForContractor(contractorId)
    .reduce((total, entry) => total + entry.hoursWorked, 0);
};

export const calculateTotalCostForContractor = (contractorId: number): number => {
  const contractor = getContractorById(contractorId);
  if (!contractor) return 0;
  
  return calculateTotalHoursForContractor(contractorId) * contractor.hourlyRate;
};

export const getContractorsByAgency = (agencyName: string): Contractor[] => {
  return contractors.filter(contractor => contractor.agency === agencyName);
};

export const getAgencyStats = () => {
  return agencies.map(agency => {
    const agencyContractors = getContractorsByAgency(agency.name);
    const totalHours = agencyContractors.reduce(
      (total, contractor) => total + calculateTotalHoursForContractor(contractor.id), 
      0
    );
    const totalCost = agencyContractors.reduce(
      (total, contractor) => total + calculateTotalCostForContractor(contractor.id), 
      0
    );
    
    return {
      name: agency.name,
      contractorCount: agency.contractorCount,
      totalHours,
      totalCost
    };
  });
};

export const getCurrentMonthStats = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  const thisMonthEntries = timeEntries.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear;
  });
  
  const totalHours = thisMonthEntries.reduce((total, entry) => total + entry.hoursWorked, 0);
  const overtimeHours = thisMonthEntries
    .filter(entry => entry.isOvertime)
    .reduce((total, entry) => total + entry.hoursWorked, 0);
  const weekendHours = thisMonthEntries
    .filter(entry => entry.isWeekend)
    .reduce((total, entry) => total + entry.hoursWorked, 0);
  
  const activeContractors = new Set(thisMonthEntries.map(entry => entry.contractorId)).size;
  
  return {
    totalHours,
    overtimeHours,
    weekendHours,
    activeContractors
  };
};
