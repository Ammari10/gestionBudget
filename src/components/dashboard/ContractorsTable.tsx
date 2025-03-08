
import { Contractor } from "@/data/mockData";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { calculateTotalHoursForContractor } from "@/data/mockData";

interface ContractorsTableProps {
  contractors: Contractor[];
  className?: string;
  limit?: number;
}

export function ContractorsTable({ 
  contractors, 
  className, 
  limit 
}: ContractorsTableProps) {
  const displayContractors = limit ? contractors.slice(0, limit) : contractors;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Prestataires {limit ? "Récents" : ""}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Cabinet</TableHead>
              <TableHead>Département</TableHead>
              <TableHead>Heures</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayContractors.map((contractor) => (
              <TableRow key={contractor.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                      <img 
                        src={contractor.photo} 
                        alt={contractor.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span>{contractor.name}</span>
                  </div>
                </TableCell>
                <TableCell>{contractor.agency}</TableCell>
                <TableCell>{contractor.department}</TableCell>
                <TableCell>{calculateTotalHoursForContractor(contractor.id).toFixed(1)}</TableCell>
                <TableCell>
                  <Badge 
                    className={cn(
                      contractor.status === "active" ? "bg-banking-success hover:bg-banking-success/80" :
                      contractor.status === "warning" ? "bg-banking-accent hover:bg-banking-accent/80" :
                      "bg-destructive hover:bg-destructive/80"
                    )}
                  >
                    {contractor.status === "active" ? "Actif" :
                     contractor.status === "warning" ? "Attention" : "Inactif"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
