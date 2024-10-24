import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DeleteIcon,
  Edit2,
  MoreHorizontal,
  PlusCircle,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild>
          <Link href={"/dashboard/products/create"}>
            <PlusCircle size={8} />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view sales performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className="size-10" />
                </TableCell>
                <TableCell>Nike Air</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>$299.00</TableCell>
                <TableCell>2024-06-16</TableCell>
                <TableCell className="text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"secondary"} size={"icon"}>
                        <MoreHorizontal className="size-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <Edit2 className="size-2" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-red-500 hover:bg-red-600 hover:text-white">
                        <DeleteIcon className="size-3" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
