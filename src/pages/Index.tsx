
import { 
  BarChart3, 
  Clock, 
  Users, 
  Wallet, 
  Building2, 
  AlertCircle,
  PieChart,
  BarChart 
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { BudgetChart } from "@/components/dashboard/BudgetChart";
import { ContractorsTable } from "@/components/dashboard/ContractorsTable";
import { DepartmentDonutChart } from "@/components/dashboard/DepartmentDonutChart";
import { 
  contractors, 
  budgetData, 
  departmentData, 
  agencies,
  getCurrentMonthStats
} from "@/data/mockData";

const Index = () => {
  const currentMonthStats = getCurrentMonthStats();
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(currentDate);

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-sm text-muted-foreground">
            {formattedDate}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Prestataires Actifs"
            value={currentMonthStats.activeContractors}
            description={`Sur un total de ${contractors.length} prestataires`}
            icon={<Users className="h-5 w-5" />}
            trend="up"
            trendValue="2 nouveaux ce mois"
          />
          <StatCard 
            title="Heures Travaillées (Mois)"
            value={Math.round(currentMonthStats.totalHours)}
            description="Heures enregistrées ce mois"
            icon={<Clock className="h-5 w-5" />}
            trend="neutral"
            trendValue="-1% vs mois dernier"
          />
          <StatCard 
            title="Heures Supplémentaires"
            value={Math.round(currentMonthStats.overtimeHours)}
            description={`${Math.round(currentMonthStats.overtimeHours / currentMonthStats.totalHours * 100)}% du total des heures`}
            icon={<AlertCircle className="h-5 w-5" />}
            trend="down"
            trendValue="5% de moins ce mois"
          />
          <StatCard 
            title="Budget Prévisionnel"
            value={`${(budgetData[currentDate.getMonth()].planned / 1000000).toFixed(2)}M MAD`}
            description="Budget mensuel alloué"
            icon={<Wallet className="h-5 w-5" />}
            trend="up"
            trendValue="3% vs mois dernier"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <BudgetChart data={budgetData} />
          <DepartmentDonutChart data={departmentData} />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Vue d'ensemble</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard 
              title="Total des Cabinets"
              value={agencies.length}
              description="Cabinets prestataires actifs"
              icon={<Building2 className="h-5 w-5" />}
              className="md:col-span-1"
            />
            <StatCard 
              title="Départements"
              value={departmentData.length}
              description="Départements utilisant des prestataires"
              icon={<BarChart className="h-5 w-5" />}
              className="md:col-span-1"
            />
            <StatCard 
              title="Coût Moyen"
              value={`${350} MAD/h`}
              description="Taux horaire moyen"
              icon={<PieChart className="h-5 w-5" />}
              className="md:col-span-1"
            />
          </div>
        </div>

        <ContractorsTable contractors={contractors} limit={5} />
      </div>
    </DashboardLayout>
  );
};

export default Index;
