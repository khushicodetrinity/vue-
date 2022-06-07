<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CrudController extends Controller
{
    public function add_user(Request $req)
    {
        $user = new User();
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = Hash::make($req->password);
        $user->save();
        return response()->json($user);
    }
    public function users()
    {
        $user = User::all();
        return response()->json($user);
    }
    public function edit_user($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }
    public function update_user(Request $req)
    {
        User::where('id',$req->id)->update(['name'=>$req->name,'email'=>$req->email]);
    }
    public function delete_user($id)
    {
        User::find($id)->delete();
    }
}
