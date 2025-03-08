
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { BudgetData } from "@/data/mockData";

interface BudgetChartProps {
  data: BudgetData[];
  className?: string;
}

export function BudgetChart({ data, className }: BudgetChartProps) {
  const chartData = useMemo(() => {
    return data.map(item => ({
      name: item.month,
      Prévu: item.planned / 1000, // Convert to thousands for better display
      Réel: item.actual / 1000
    }));
  }, [data]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Budget Mensuel (KDH)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPlanned" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--card-foreground))"
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="Prévu" 
                stroke="hsl(var(--primary))" 
                fillOpacity={1} 
                fill="url(#colorPlanned)" 
              />
              <Area 
                type="monotone" 
                dataKey="Réel" 
                stroke="hsl(var(--secondary))" 
                fillOpacity={1} 
                fill="url(#colorActual)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
