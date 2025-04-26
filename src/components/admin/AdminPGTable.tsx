
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PGListing } from '@/types/pg';
import { Edit, Trash2 } from 'lucide-react';

interface AdminPGTableProps {
  listings: PGListing[];
  onDeleteListing: (id: string) => void;
}

const AdminPGTable: React.FC<AdminPGTableProps> = ({ listings, onDeleteListing }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Rent</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <span>{listing.name}</span>
                  {listing.featured && (
                    <Badge className="bg-pg-purple text-white">Featured</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>{listing.location}</TableCell>
              <TableCell>
                <Badge className={`${
                  listing.type === 'Boys' ? 'bg-blue-500' : 
                  listing.type === 'Girls' ? 'bg-pink-500' : 
                  'bg-green-500'
                } text-white`}>
                  {listing.type}
                </Badge>
                <Badge variant="outline" className="ml-1">
                  {listing.roomType}
                </Badge>
              </TableCell>
              <TableCell className="text-right">₹{listing.rent.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Link to={`/admin/edit-listing/${listing.id}`}>
                    <Button variant="outline" size="icon">
                      <Edit size={16} />
                    </Button>
                  </Link>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={() => onDeleteListing(listing.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPGTable;
