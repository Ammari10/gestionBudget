
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { DepartmentData } from "@/data/mockData";

interface DepartmentDonutChartProps {
  data: DepartmentData[];
  className?: string;
}

export function DepartmentDonutChart({ data, className }: DepartmentDonutChartProps) {
  const COLORS = [
    'hsl(var(--primary))', 
    'hsl(var(--secondary))', 
    'hsl(var(--accent))',
    'hsl(var(--banking-blue))',
    'hsl(var(--banking-teal))',
    'hsl(var(--banking-accent))'
  ];

  const chartData = data.map(dept => ({
    name: dept.name,
    value: dept.budgetPercentage
  }));

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Répartition Budget par Département</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${value}%`}
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--card-foreground))"
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
